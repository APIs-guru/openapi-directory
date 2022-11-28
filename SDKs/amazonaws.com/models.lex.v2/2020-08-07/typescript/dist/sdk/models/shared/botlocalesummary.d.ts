import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
/**
 * Summary information about bot locales returned by the <a>ListBotLocales</a> operation.
**/
export declare class BotLocaleSummary extends SpeakeasyBase {
    botLocaleStatus?: BotLocaleStatusEnum;
    description?: string;
    lastBuildSubmittedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    localeName?: string;
}
