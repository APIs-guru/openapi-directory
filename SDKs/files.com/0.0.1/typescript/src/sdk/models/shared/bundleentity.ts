import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormFieldSetEntity } from "./formfieldsetentity";


// BundleEntity
/** 
 * Create Bundle
**/
export class BundleEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickwrap_body" })
  clickwrapBody?: string;

  @Metadata({ data: "json, name=clickwrap_id" })
  clickwrapId?: number;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=form_field_set" })
  formFieldSet?: FormFieldSetEntity;

  @Metadata({ data: "json, name=has_inbox" })
  hasInbox?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inbox_id" })
  inboxId?: number;

  @Metadata({ data: "json, name=max_uses" })
  maxUses?: number;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=password_protected" })
  passwordProtected?: boolean;

  @Metadata({ data: "json, name=paths" })
  paths?: string[];

  @Metadata({ data: "json, name=preview_only" })
  previewOnly?: boolean;

  @Metadata({ data: "json, name=require_registration" })
  requireRegistration?: boolean;

  @Metadata({ data: "json, name=require_share_recipient" })
  requireShareRecipient?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
