import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SessionEntity
/** 
 * Create user session (log in)
**/
export class SessionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=login_token" })
  loginToken?: string;

  @Metadata({ data: "json, name=login_token_domain" })
  loginTokenDomain?: string;

  @Metadata({ data: "json, name=max_dir_listing_size" })
  maxDirListingSize?: number;

  @Metadata({ data: "json, name=multiple_regions" })
  multipleRegions?: boolean;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=root_path" })
  rootPath?: string;

  @Metadata({ data: "json, name=site_id" })
  siteId?: number;

  @Metadata({ data: "json, name=ssl_required" })
  sslRequired?: boolean;

  @Metadata({ data: "json, name=tls_disabled" })
  tlsDisabled?: boolean;

  @Metadata({ data: "json, name=two_factor_setup_needed" })
  twoFactorSetupNeeded?: boolean;

  @Metadata({ data: "json, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @Metadata({ data: "json, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}
