import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordStatusEnum } from "./recordstatusenum";



export class UpdateProvisionedProductPropertiesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductProperties" })
  provisionedProductProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RecordId" })
  recordId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RecordStatusEnum;
}
