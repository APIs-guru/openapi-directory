import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarms
/** 
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export class Alarms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmRoleArn" })
  alarmRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=notificationLambdaArn" })
  notificationLambdaArn?: string;
}
