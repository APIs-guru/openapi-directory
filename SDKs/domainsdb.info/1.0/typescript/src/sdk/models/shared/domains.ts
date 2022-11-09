import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MxRecords } from "./mxrecords";


export class Domains extends SpeakeasyBase {
  @Metadata({ data: "json, name=A" })
  a?: string[];

  @Metadata({ data: "json, name=CNAME" })
  cname?: string[];

  @Metadata({ data: "json, name=MX", elemType: shared.MxRecords })
  mx?: MxRecords[];

  @Metadata({ data: "json, name=NS" })
  ns?: string[];

  @Metadata({ data: "json, name=TXT" })
  txt?: string[];

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=create_date" })
  createDate?: Date;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=isDead" })
  isDead?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
