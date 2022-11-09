import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ResourceRecordTypeEnum {
    RecordTypeUnspecified = "RECORD_TYPE_UNSPECIFIED"
,    A = "A"
,    Aaaa = "AAAA"
,    Cname = "CNAME"
}


// ResourceRecord
/** 
 * A DNS resource record.
**/
export class ResourceRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rrdata" })
  rrdata?: string;

  @Metadata({ data: "json, name=type" })
  type?: ResourceRecordTypeEnum;
}
