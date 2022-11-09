import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Consumer } from "./consumer";


export class ListStreamConsumersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Consumers", elemType: shared.Consumer })
  consumers?: Consumer[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
