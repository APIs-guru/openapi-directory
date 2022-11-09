import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PinpointDestination
/** 
 * An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.
**/
export class PinpointDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationArn" })
  applicationArn?: string;
}
