import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelsS3InputConfiguration } from "./labelss3inputconfiguration";


// LabelsInputConfiguration
/** 
 * Contains the configuration information for the S3 location being used to hold label data. 
**/
export class LabelsInputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3InputConfiguration" })
  s3InputConfiguration: LabelsS3InputConfiguration;
}
