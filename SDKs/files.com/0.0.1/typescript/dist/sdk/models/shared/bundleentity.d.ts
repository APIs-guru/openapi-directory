import { SpeakeasyBase } from "../../../internal/utils";
import { FormFieldSetEntity } from "./formfieldsetentity";
/**
 * Create Bundle
**/
export declare class BundleEntity extends SpeakeasyBase {
    clickwrapBody?: string;
    clickwrapId?: number;
    code?: string;
    createdAt?: Date;
    description?: string;
    expiresAt?: Date;
    formFieldSet?: FormFieldSetEntity;
    hasInbox?: boolean;
    id?: number;
    inboxId?: number;
    maxUses?: number;
    note?: string;
    passwordProtected?: boolean;
    paths?: string[];
    previewOnly?: boolean;
    requireRegistration?: boolean;
    requireShareRecipient?: boolean;
    url?: string;
    userId?: number;
    username?: string;
}
