import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationTypeEnum } from "./logdestinationtypeenum";
import { LogTypeEnum } from "./logtypeenum";



// LogDestinationConfig
/** 
 * <p>Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>
**/
export class LogDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogDestination" })
  logDestination: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LogDestinationType" })
  logDestinationType: LogDestinationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LogType" })
  logType: LogTypeEnum;
}
