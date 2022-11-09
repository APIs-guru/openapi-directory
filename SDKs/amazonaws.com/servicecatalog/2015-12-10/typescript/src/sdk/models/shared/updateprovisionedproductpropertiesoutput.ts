import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordStatusEnum } from "./recordstatusenum";


export class UpdateProvisionedProductPropertiesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductProperties" })
  provisionedProductProperties?: Map<string, string>;

  @Metadata({ data: "json, name=RecordId" })
  recordId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RecordStatusEnum;
}
