import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InfrastructureProperties
/** 
 * Infrastructure properties
**/
export class InfrastructureProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDracoonCloud" })
  isDracoonCloud?: boolean;

  @Metadata({ data: "json, name=mediaServerConfigEnabled" })
  mediaServerConfigEnabled?: boolean;

  @Metadata({ data: "json, name=s3DefaultRegion" })
  s3DefaultRegion?: string;

  @Metadata({ data: "json, name=s3EnforceDirectUpload" })
  s3EnforceDirectUpload?: boolean;

  @Metadata({ data: "json, name=smsConfigEnabled" })
  smsConfigEnabled?: boolean;

  @Metadata({ data: "json, name=tenantUuid" })
  tenantUuid?: string;
}
