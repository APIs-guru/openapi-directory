import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MxRecords } from "./mxrecords";



export class Domains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=A" })
  a?: string[];

  @SpeakeasyMetadata({ data: "json, name=CNAME" })
  cname?: string[];

  @SpeakeasyMetadata({ data: "json, name=MX", elemType: MxRecords })
  mx?: MxRecords[];

  @SpeakeasyMetadata({ data: "json, name=NS" })
  ns?: string[];

  @SpeakeasyMetadata({ data: "json, name=TXT" })
  txt?: string[];

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=create_date" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=isDead" })
  isDead?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
