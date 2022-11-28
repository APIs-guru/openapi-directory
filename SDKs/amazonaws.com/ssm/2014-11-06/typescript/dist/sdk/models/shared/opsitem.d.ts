import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { OpsItemStatusEnum } from "./opsitemstatusenum";
/**
 * <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
**/
export declare class OpsItem extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    createdBy?: string;
    createdTime?: Date;
    description?: string;
    lastModifiedBy?: string;
    lastModifiedTime?: Date;
    notifications?: OpsItemNotification[];
    operationalData?: Map<string, OpsItemDataValue>;
    opsItemId?: string;
    opsItemType?: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    relatedOpsItems?: RelatedOpsItem[];
    severity?: string;
    source?: string;
    status?: OpsItemStatusEnum;
    title?: string;
    version?: string;
}
