import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseSettingsEnterpriseAvatar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class EnterpriseSettingsEnterpriseCas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseSettingsEnterpriseCollectd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class EnterpriseSettingsEnterpriseCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key_data" })
  publicKeyData?: string;

  @SpeakeasyMetadata({ data: "json, name=secret_key_data" })
  secretKeyData?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class EnterpriseSettingsEnterpriseGithubOauth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_name" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_team" })
  organizationTeam?: string;
}


export class EnterpriseSettingsEnterpriseGithubSsl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cert" })
  cert?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}


export class EnterpriseSettingsEnterpriseLdapProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=mail" })
  mail?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class EnterpriseSettingsEnterpriseLdapReconciliation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


export class EnterpriseSettingsEnterpriseLdap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_group" })
  adminGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: any[];

  @SpeakeasyMetadata({ data: "json, name=bind_dn" })
  bindDn?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=posix_support" })
  posixSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: EnterpriseSettingsEnterpriseLdapProfile;

  @SpeakeasyMetadata({ data: "json, name=reconciliation" })
  reconciliation?: EnterpriseSettingsEnterpriseLdapReconciliation;

  @SpeakeasyMetadata({ data: "json, name=recursive_group_search" })
  recursiveGroupSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_strategy" })
  searchStrategy?: string;

  @SpeakeasyMetadata({ data: "json, name=sync_enabled" })
  syncEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=team_sync_interval" })
  teamSyncInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=user_groups" })
  userGroups?: any[];

  @SpeakeasyMetadata({ data: "json, name=user_sync_emails" })
  userSyncEmails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_sync_interval" })
  userSyncInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=user_sync_keys" })
  userSyncKeys?: boolean;

  @SpeakeasyMetadata({ data: "json, name=virtual_attribute_enabled" })
  virtualAttributeEnabled?: boolean;
}


export class EnterpriseSettingsEnterpriseLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_support" })
  clusterSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=evaluation" })
  evaluation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expire_at" })
  expireAt?: string;

  @SpeakeasyMetadata({ data: "json, name=perpetual" })
  perpetual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: number;

  @SpeakeasyMetadata({ data: "json, name=ssh_allowed" })
  sshAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=support_key" })
  supportKey?: string;

  @SpeakeasyMetadata({ data: "json, name=unlimited_seating" })
  unlimitedSeating?: boolean;
}


export class EnterpriseSettingsEnterpriseMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basemap" })
  basemap?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tileserver" })
  tileserver?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class EnterpriseSettingsEnterpriseNtp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_server" })
  primaryServer?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_server" })
  secondaryServer?: string;
}


export class EnterpriseSettingsEnterprisePages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class EnterpriseSettingsEnterpriseSaml extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=certificate_path" })
  certificatePath?: string;

  @SpeakeasyMetadata({ data: "json, name=disable_admin_demote" })
  disableAdminDemote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idp_initiated_sso" })
  idpInitiatedSso?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=sso_url" })
  ssoUrl?: string;
}


export class EnterpriseSettingsEnterpriseSmtp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: string;

  @SpeakeasyMetadata({ data: "json, name=discard-to-noreply-address" })
  discardToNoreplyAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=enable_starttls_auto" })
  enableStarttlsAuto?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noreply_address" })
  noreplyAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=support_address" })
  supportAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=support_address_type" })
  supportAddressType?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class EnterpriseSettingsEnterpriseSnmp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=community" })
  community?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class EnterpriseSettingsEnterpriseSyslog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protocol_name" })
  protocolName?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;
}


export class EnterpriseSettingsEnterprise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_password" })
  adminPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_mode" })
  authMode?: string;

  @SpeakeasyMetadata({ data: "json, name=avatar" })
  avatar?: EnterpriseSettingsEnterpriseAvatar;

  @SpeakeasyMetadata({ data: "json, name=cas" })
  cas?: EnterpriseSettingsEnterpriseCas;

  @SpeakeasyMetadata({ data: "json, name=collectd" })
  collectd?: EnterpriseSettingsEnterpriseCollectd;

  @SpeakeasyMetadata({ data: "json, name=configuration_id" })
  configurationId?: number;

  @SpeakeasyMetadata({ data: "json, name=configuration_run_count" })
  configurationRunCount?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: EnterpriseSettingsEnterpriseCustomer;

  @SpeakeasyMetadata({ data: "json, name=expire_sessions" })
  expireSessions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=github_hostname" })
  githubHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=github_oauth" })
  githubOauth?: EnterpriseSettingsEnterpriseGithubOauth;

  @SpeakeasyMetadata({ data: "json, name=github_ssl" })
  githubSsl?: EnterpriseSettingsEnterpriseGithubSsl;

  @SpeakeasyMetadata({ data: "json, name=http_proxy" })
  httpProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=identicons_host" })
  identiconsHost?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap" })
  ldap?: EnterpriseSettingsEnterpriseLdap;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: EnterpriseSettingsEnterpriseLicense;

  @SpeakeasyMetadata({ data: "json, name=load_balancer" })
  loadBalancer?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: EnterpriseSettingsEnterpriseMapping;

  @SpeakeasyMetadata({ data: "json, name=ntp" })
  ntp?: EnterpriseSettingsEnterpriseNtp;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: EnterpriseSettingsEnterprisePages;

  @SpeakeasyMetadata({ data: "json, name=private_mode" })
  privateMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_pages" })
  publicPages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saml" })
  saml?: EnterpriseSettingsEnterpriseSaml;

  @SpeakeasyMetadata({ data: "json, name=signup_enabled" })
  signupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smtp" })
  smtp?: EnterpriseSettingsEnterpriseSmtp;

  @SpeakeasyMetadata({ data: "json, name=snmp" })
  snmp?: EnterpriseSettingsEnterpriseSnmp;

  @SpeakeasyMetadata({ data: "json, name=subdomain_isolation" })
  subdomainIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syslog" })
  syslog?: EnterpriseSettingsEnterpriseSyslog;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class EnterpriseSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enterprise" })
  enterprise?: EnterpriseSettingsEnterprise;

  @SpeakeasyMetadata({ data: "json, name=run_list" })
  runList?: string[];
}
