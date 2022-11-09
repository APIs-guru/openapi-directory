import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SeveritySummary
/** 
 * The number of managed instances found for each patch severity level defined in the request filter.
**/
export class SeveritySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CriticalCount" })
  criticalCount?: number;

  @Metadata({ data: "json, name=HighCount" })
  highCount?: number;

  @Metadata({ data: "json, name=InformationalCount" })
  informationalCount?: number;

  @Metadata({ data: "json, name=LowCount" })
  lowCount?: number;

  @Metadata({ data: "json, name=MediumCount" })
  mediumCount?: number;

  @Metadata({ data: "json, name=UnspecifiedCount" })
  unspecifiedCount?: number;
}
