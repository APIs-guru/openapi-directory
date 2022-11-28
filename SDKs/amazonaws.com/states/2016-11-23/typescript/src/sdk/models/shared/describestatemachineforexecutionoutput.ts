import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";



export class DescribeStateMachineForExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=tracingConfiguration" })
  tracingConfiguration?: TracingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate: Date;
}
