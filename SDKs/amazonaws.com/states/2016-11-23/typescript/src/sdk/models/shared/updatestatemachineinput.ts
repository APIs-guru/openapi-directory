import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";



export class UpdateStateMachineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=tracingConfiguration" })
  tracingConfiguration?: TracingConfiguration;
}
