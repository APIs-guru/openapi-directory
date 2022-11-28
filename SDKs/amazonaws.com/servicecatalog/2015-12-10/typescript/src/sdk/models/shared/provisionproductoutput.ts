import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordDetail } from "./recorddetail";



export class ProvisionProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordDetail" })
  recordDetail?: RecordDetail;
}
