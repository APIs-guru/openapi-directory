import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormFieldSetEntity } from "./formfieldsetentity";



// BundleEntity
/** 
 * Create Bundle
**/
export class BundleEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @SpeakeasyMetadata({ data: "json, name=clickwrap_id" })
  clickwrapId?: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=form_field_set" })
  formFieldSet?: FormFieldSetEntity;

  @SpeakeasyMetadata({ data: "json, name=has_inbox" })
  hasInbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inbox_id" })
  inboxId?: number;

  @SpeakeasyMetadata({ data: "json, name=max_uses" })
  maxUses?: number;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=password_protected" })
  passwordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=preview_only" })
  previewOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_registration" })
  requireRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_share_recipient" })
  requireShareRecipient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
