import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvVoucherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voucher" })
  voucher: string;
}
