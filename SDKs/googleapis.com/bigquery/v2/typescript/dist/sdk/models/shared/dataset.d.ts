import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetAccessEntry } from "./datasetaccessentry";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";
export declare class DatasetAccess extends SpeakeasyBase {
    dataset?: DatasetAccessEntry;
    domain?: string;
    groupByEmail?: string;
    iamMember?: string;
    role?: string;
    routine?: RoutineReference;
    specialGroup?: string;
    userByEmail?: string;
    view?: TableReference;
}
export declare class DatasetTags extends SpeakeasyBase {
    tagKey?: string;
    tagValue?: string;
}
export declare class Dataset extends SpeakeasyBase {
    access?: DatasetAccess[];
    creationTime?: string;
    datasetReference?: DatasetReference;
    defaultCollation?: string;
    defaultEncryptionConfiguration?: EncryptionConfiguration;
    defaultPartitionExpirationMs?: string;
    defaultTableExpirationMs?: string;
    description?: string;
    etag?: string;
    friendlyName?: string;
    id?: string;
    isCaseInsensitive?: boolean;
    kind?: string;
    labels?: Map<string, string>;
    lastModifiedTime?: string;
    location?: string;
    maxTimeTravelHours?: string;
    satisfiesPzs?: boolean;
    selfLink?: string;
    storageBillingModel?: string;
    tags?: DatasetTags[];
}
