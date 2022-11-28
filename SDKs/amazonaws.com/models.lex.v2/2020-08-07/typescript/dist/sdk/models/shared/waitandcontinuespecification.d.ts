import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseSpecification } from "./responsespecification";
import { StillWaitingResponseSpecification } from "./stillwaitingresponsespecification";
/**
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
**/
export declare class WaitAndContinueSpecification extends SpeakeasyBase {
    active?: boolean;
    continueResponse: ResponseSpecification;
    stillWaitingResponse?: StillWaitingResponseSpecification;
    waitingResponse: ResponseSpecification;
}
