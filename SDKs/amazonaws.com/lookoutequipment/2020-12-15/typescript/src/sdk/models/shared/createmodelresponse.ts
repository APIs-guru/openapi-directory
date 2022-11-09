import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


export class CreateModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;
}
