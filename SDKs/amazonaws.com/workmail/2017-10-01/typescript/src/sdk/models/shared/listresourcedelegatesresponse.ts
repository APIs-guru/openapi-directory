import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Delegate } from "./delegate";



export class ListResourceDelegatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Delegates", elemType: Delegate })
  delegates?: Delegate[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
