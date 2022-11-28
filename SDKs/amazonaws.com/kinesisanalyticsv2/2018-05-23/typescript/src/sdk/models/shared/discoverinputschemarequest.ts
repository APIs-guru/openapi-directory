import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { S3Configuration } from "./s3configuration";



export class DiscoverInputSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputProcessingConfiguration" })
  inputProcessingConfiguration?: InputProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Configuration" })
  s3Configuration?: S3Configuration;

  @SpeakeasyMetadata({ data: "json, name=ServiceExecutionRole" })
  serviceExecutionRole: string;
}
