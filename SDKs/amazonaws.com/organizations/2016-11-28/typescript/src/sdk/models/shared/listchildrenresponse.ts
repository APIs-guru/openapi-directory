import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Child } from "./child";


export class ListChildrenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Children", elemType: shared.Child })
  children?: Child[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
