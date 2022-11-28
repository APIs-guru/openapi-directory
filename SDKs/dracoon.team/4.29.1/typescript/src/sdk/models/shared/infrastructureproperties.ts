import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InfrastructureProperties
/** 
 * Infrastructure properties
**/
export class InfrastructureProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDracoonCloud" })
  isDracoonCloud?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaServerConfigEnabled" })
  mediaServerConfigEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3DefaultRegion" })
  s3DefaultRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=s3EnforceDirectUpload" })
  s3EnforceDirectUpload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smsConfigEnabled" })
  smsConfigEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tenantUuid" })
  tenantUuid?: string;
}
