import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceRecordTypeEnum {
    RecordTypeUnspecified = "RECORD_TYPE_UNSPECIFIED",
    A = "A",
    Aaaa = "AAAA",
    Cname = "CNAME"
}


// ResourceRecord
/** 
 * A DNS resource record.
**/
export class ResourceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rrdata" })
  rrdata?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ResourceRecordTypeEnum;
}
