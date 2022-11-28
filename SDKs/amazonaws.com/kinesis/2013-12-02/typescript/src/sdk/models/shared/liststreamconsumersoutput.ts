import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";



export class ListStreamConsumersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Consumers", elemType: Consumer })
  consumers?: Consumer[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
