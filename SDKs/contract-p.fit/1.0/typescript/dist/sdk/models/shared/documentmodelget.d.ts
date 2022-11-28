import { SpeakeasyBase } from "../../../internal/utils";
import { StateModelGet } from "./statemodelget";
import { StatusDataModel } from "./statusdatamodel";
import { TimingsModelGet } from "./timingsmodelget";
export declare class DocumentModelGet extends SpeakeasyBase {
    escalate?: StateModelGet;
    feedback?: Map<string, any>;
    files?: Map<string, any>;
    flagForReview?: boolean;
    id: string;
    inbox: string;
    lastVersion?: string;
    lock?: StateModelGet;
    metaInformation?: Map<string, any>;
    originalFilename: string;
    pageCount: number;
    prediction?: Map<string, any>;
    reject?: StateModelGet;
    statusData?: StatusDataModel;
    submitted?: StateModelGet;
    timings?: TimingsModelGet;
    usageData?: Map<string, any>;
    versions?: Map<string, any>[];
}
