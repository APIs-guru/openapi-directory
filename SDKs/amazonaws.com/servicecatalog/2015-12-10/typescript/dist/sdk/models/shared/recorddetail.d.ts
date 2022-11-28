import { SpeakeasyBase } from "../../../internal/utils";
import { RecordError } from "./recorderror";
import { RecordTag } from "./recordtag";
import { RecordStatusEnum } from "./recordstatusenum";
/**
 * Information about a request operation.
**/
export declare class RecordDetail extends SpeakeasyBase {
    createdTime?: Date;
    launchRoleArn?: string;
    pathId?: string;
    productId?: string;
    provisionedProductId?: string;
    provisionedProductName?: string;
    provisionedProductType?: string;
    provisioningArtifactId?: string;
    recordErrors?: RecordError[];
    recordId?: string;
    recordTags?: RecordTag[];
    recordType?: string;
    status?: RecordStatusEnum;
    updatedTime?: Date;
}
