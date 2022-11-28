import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parent } from "./parent";



export class ListParentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Parents", elemType: Parent })
  parents?: Parent[];
}
