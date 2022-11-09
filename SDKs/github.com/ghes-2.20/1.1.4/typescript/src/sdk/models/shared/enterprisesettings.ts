import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseSettingsEnterpriseAvatar extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class EnterpriseSettingsEnterpriseCas extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseSettingsEnterpriseCollectd extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=encryption" })
  encryption?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class EnterpriseSettingsEnterpriseCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=public_key_data" })
  publicKeyData?: string;

  @Metadata({ data: "json, name=secret_key_data" })
  secretKeyData?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class EnterpriseSettingsEnterpriseGithubOauth extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=organization_name" })
  organizationName?: string;

  @Metadata({ data: "json, name=organization_team" })
  organizationTeam?: string;
}


export class EnterpriseSettingsEnterpriseGithubSsl extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert" })
  cert?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;
}


export class EnterpriseSettingsEnterpriseLdapProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=mail" })
  mail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class EnterpriseSettingsEnterpriseLdapReconciliation extends SpeakeasyBase {
  @Metadata({ data: "json, name=org" })
  org?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class EnterpriseSettingsEnterpriseLdap extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_group" })
  adminGroup?: string;

  @Metadata({ data: "json, name=base" })
  base?: any[];

  @Metadata({ data: "json, name=bind_dn" })
  bindDn?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=posix_support" })
  posixSupport?: boolean;

  @Metadata({ data: "json, name=profile" })
  profile?: EnterpriseSettingsEnterpriseLdapProfile;

  @Metadata({ data: "json, name=reconciliation" })
  reconciliation?: EnterpriseSettingsEnterpriseLdapReconciliation;

  @Metadata({ data: "json, name=recursive_group_search" })
  recursiveGroupSearch?: boolean;

  @Metadata({ data: "json, name=search_strategy" })
  searchStrategy?: string;

  @Metadata({ data: "json, name=sync_enabled" })
  syncEnabled?: boolean;

  @Metadata({ data: "json, name=team_sync_interval" })
  teamSyncInterval?: number;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=user_groups" })
  userGroups?: any[];

  @Metadata({ data: "json, name=user_sync_emails" })
  userSyncEmails?: boolean;

  @Metadata({ data: "json, name=user_sync_interval" })
  userSyncInterval?: number;

  @Metadata({ data: "json, name=user_sync_keys" })
  userSyncKeys?: boolean;

  @Metadata({ data: "json, name=virtual_attribute_enabled" })
  virtualAttributeEnabled?: boolean;
}


export class EnterpriseSettingsEnterpriseLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_support" })
  clusterSupport?: boolean;

  @Metadata({ data: "json, name=evaluation" })
  evaluation?: boolean;

  @Metadata({ data: "json, name=expire_at" })
  expireAt?: string;

  @Metadata({ data: "json, name=perpetual" })
  perpetual?: boolean;

  @Metadata({ data: "json, name=seats" })
  seats?: number;

  @Metadata({ data: "json, name=ssh_allowed" })
  sshAllowed?: boolean;

  @Metadata({ data: "json, name=support_key" })
  supportKey?: string;

  @Metadata({ data: "json, name=unlimited_seating" })
  unlimitedSeating?: boolean;
}


export class EnterpriseSettingsEnterpriseMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=basemap" })
  basemap?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=tileserver" })
  tileserver?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class EnterpriseSettingsEnterpriseNtp extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_server" })
  primaryServer?: string;

  @Metadata({ data: "json, name=secondary_server" })
  secondaryServer?: string;
}


export class EnterpriseSettingsEnterprisePages extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class EnterpriseSettingsEnterpriseSaml extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=certificate_path" })
  certificatePath?: string;

  @Metadata({ data: "json, name=disable_admin_demote" })
  disableAdminDemote?: boolean;

  @Metadata({ data: "json, name=idp_initiated_sso" })
  idpInitiatedSso?: boolean;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=sso_url" })
  ssoUrl?: string;
}


export class EnterpriseSettingsEnterpriseSmtp extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=authentication" })
  authentication?: string;

  @Metadata({ data: "json, name=discard-to-noreply-address" })
  discardToNoreplyAddress?: boolean;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=enable_starttls_auto" })
  enableStarttlsAuto?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=noreply_address" })
  noreplyAddress?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=support_address" })
  supportAddress?: string;

  @Metadata({ data: "json, name=support_address_type" })
  supportAddressType?: string;

  @Metadata({ data: "json, name=user_name" })
  userName?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class EnterpriseSettingsEnterpriseSnmp extends SpeakeasyBase {
  @Metadata({ data: "json, name=community" })
  community?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class EnterpriseSettingsEnterpriseSyslog extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=protocol_name" })
  protocolName?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;
}


export class EnterpriseSettingsEnterprise extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_password" })
  adminPassword?: string;

  @Metadata({ data: "json, name=assets" })
  assets?: string;

  @Metadata({ data: "json, name=auth_mode" })
  authMode?: string;

  @Metadata({ data: "json, name=avatar" })
  avatar?: EnterpriseSettingsEnterpriseAvatar;

  @Metadata({ data: "json, name=cas" })
  cas?: EnterpriseSettingsEnterpriseCas;

  @Metadata({ data: "json, name=collectd" })
  collectd?: EnterpriseSettingsEnterpriseCollectd;

  @Metadata({ data: "json, name=configuration_id" })
  configurationId?: number;

  @Metadata({ data: "json, name=configuration_run_count" })
  configurationRunCount?: number;

  @Metadata({ data: "json, name=customer" })
  customer?: EnterpriseSettingsEnterpriseCustomer;

  @Metadata({ data: "json, name=expire_sessions" })
  expireSessions?: boolean;

  @Metadata({ data: "json, name=github_hostname" })
  githubHostname?: string;

  @Metadata({ data: "json, name=github_oauth" })
  githubOauth?: EnterpriseSettingsEnterpriseGithubOauth;

  @Metadata({ data: "json, name=github_ssl" })
  githubSsl?: EnterpriseSettingsEnterpriseGithubSsl;

  @Metadata({ data: "json, name=http_proxy" })
  httpProxy?: string;

  @Metadata({ data: "json, name=identicons_host" })
  identiconsHost?: string;

  @Metadata({ data: "json, name=ldap" })
  ldap?: EnterpriseSettingsEnterpriseLdap;

  @Metadata({ data: "json, name=license" })
  license?: EnterpriseSettingsEnterpriseLicense;

  @Metadata({ data: "json, name=load_balancer" })
  loadBalancer?: string;

  @Metadata({ data: "json, name=mapping" })
  mapping?: EnterpriseSettingsEnterpriseMapping;

  @Metadata({ data: "json, name=ntp" })
  ntp?: EnterpriseSettingsEnterpriseNtp;

  @Metadata({ data: "json, name=pages" })
  pages?: EnterpriseSettingsEnterprisePages;

  @Metadata({ data: "json, name=private_mode" })
  privateMode?: boolean;

  @Metadata({ data: "json, name=public_pages" })
  publicPages?: boolean;

  @Metadata({ data: "json, name=saml" })
  saml?: EnterpriseSettingsEnterpriseSaml;

  @Metadata({ data: "json, name=signup_enabled" })
  signupEnabled?: boolean;

  @Metadata({ data: "json, name=smtp" })
  smtp?: EnterpriseSettingsEnterpriseSmtp;

  @Metadata({ data: "json, name=snmp" })
  snmp?: EnterpriseSettingsEnterpriseSnmp;

  @Metadata({ data: "json, name=subdomain_isolation" })
  subdomainIsolation?: boolean;

  @Metadata({ data: "json, name=syslog" })
  syslog?: EnterpriseSettingsEnterpriseSyslog;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class EnterpriseSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enterprise" })
  enterprise?: EnterpriseSettingsEnterprise;

  @Metadata({ data: "json, name=run_list" })
  runList?: string[];
}
