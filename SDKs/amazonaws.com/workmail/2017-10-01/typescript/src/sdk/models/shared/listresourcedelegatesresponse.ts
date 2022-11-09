import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Delegate } from "./delegate";


export class ListResourceDelegatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Delegates", elemType: shared.Delegate })
  delegates?: Delegate[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
