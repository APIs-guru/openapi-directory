import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionEntity
/** 
 * Create user session (log in)
**/
export class SessionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=login_token" })
  loginToken?: string;

  @SpeakeasyMetadata({ data: "json, name=login_token_domain" })
  loginTokenDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=max_dir_listing_size" })
  maxDirListingSize?: number;

  @SpeakeasyMetadata({ data: "json, name=multiple_regions" })
  multipleRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=root_path" })
  rootPath?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: number;

  @SpeakeasyMetadata({ data: "json, name=ssl_required" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tls_disabled" })
  tlsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=two_factor_setup_needed" })
  twoFactorSetupNeeded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}
