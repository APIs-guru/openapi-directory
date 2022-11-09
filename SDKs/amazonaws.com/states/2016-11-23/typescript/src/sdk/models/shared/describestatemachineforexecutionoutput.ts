import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";


export class DescribeStateMachineForExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition: string;

  @Metadata({ data: "json, name=loggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @Metadata({ data: "json, name=tracingConfiguration" })
  tracingConfiguration?: TracingConfiguration;

  @Metadata({ data: "json, name=updateDate" })
  updateDate: Date;
}
