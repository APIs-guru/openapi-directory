import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvVoucherRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=voucher" })
  voucher: string;
}
