import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { S3Configuration } from "./s3configuration";


export class DiscoverInputSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputProcessingConfiguration" })
  inputProcessingConfiguration?: InputProcessingConfiguration;

  @Metadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3Configuration" })
  s3Configuration?: S3Configuration;
}
