import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";
import { JourneyCustomMessage } from "./journeycustommessage";
/**
 * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
**/
export declare class CustomMessageActivity extends SpeakeasyBase {
    deliveryUri?: string;
    endpointTypes?: EndpointTypesElementEnum[];
    messageConfig?: JourneyCustomMessage;
    nextActivity?: string;
    templateName?: string;
    templateVersion?: string;
}
