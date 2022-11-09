import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordDetail } from "./recorddetail";


export class TerminateProvisionedProductOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecordDetail" })
  recordDetail?: RecordDetail;
}
