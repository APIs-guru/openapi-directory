import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseSettingsEnterpriseAvatar extends SpeakeasyBase {
    enabled?: boolean;
    uri?: string;
}
export declare class EnterpriseSettingsEnterpriseCas extends SpeakeasyBase {
    url?: string;
}
export declare class EnterpriseSettingsEnterpriseCollectd extends SpeakeasyBase {
    enabled?: boolean;
    encryption?: string;
    password?: string;
    port?: number;
    server?: string;
    username?: string;
}
export declare class EnterpriseSettingsEnterpriseCustomer extends SpeakeasyBase {
    email?: string;
    name?: string;
    publicKeyData?: string;
    secretKeyData?: string;
    uuid?: string;
}
export declare class EnterpriseSettingsEnterpriseGithubOauth extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    organizationName?: string;
    organizationTeam?: string;
}
export declare class EnterpriseSettingsEnterpriseGithubSsl extends SpeakeasyBase {
    cert?: string;
    enabled?: boolean;
    key?: string;
}
export declare class EnterpriseSettingsEnterpriseLdapProfile extends SpeakeasyBase {
    key?: string;
    mail?: string;
    name?: string;
    uid?: string;
}
export declare class EnterpriseSettingsEnterpriseLdapReconciliation extends SpeakeasyBase {
    org?: string;
    user?: string;
}
export declare class EnterpriseSettingsEnterpriseLdap extends SpeakeasyBase {
    adminGroup?: string;
    base?: any[];
    bindDn?: string;
    host?: string;
    method?: string;
    password?: string;
    port?: number;
    posixSupport?: boolean;
    profile?: EnterpriseSettingsEnterpriseLdapProfile;
    reconciliation?: EnterpriseSettingsEnterpriseLdapReconciliation;
    recursiveGroupSearch?: boolean;
    searchStrategy?: string;
    syncEnabled?: boolean;
    teamSyncInterval?: number;
    uid?: string;
    userGroups?: any[];
    userSyncEmails?: boolean;
    userSyncInterval?: number;
    userSyncKeys?: boolean;
    virtualAttributeEnabled?: boolean;
}
export declare class EnterpriseSettingsEnterpriseLicense extends SpeakeasyBase {
    clusterSupport?: boolean;
    evaluation?: boolean;
    expireAt?: string;
    perpetual?: boolean;
    seats?: number;
    sshAllowed?: boolean;
    supportKey?: string;
    unlimitedSeating?: boolean;
}
export declare class EnterpriseSettingsEnterpriseMapping extends SpeakeasyBase {
    basemap?: string;
    enabled?: boolean;
    tileserver?: string;
    token?: string;
}
export declare class EnterpriseSettingsEnterpriseNtp extends SpeakeasyBase {
    primaryServer?: string;
    secondaryServer?: string;
}
export declare class EnterpriseSettingsEnterprisePages extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class EnterpriseSettingsEnterpriseSaml extends SpeakeasyBase {
    certificate?: string;
    certificatePath?: string;
    disableAdminDemote?: boolean;
    idpInitiatedSso?: boolean;
    issuer?: string;
    ssoUrl?: string;
}
export declare class EnterpriseSettingsEnterpriseSmtp extends SpeakeasyBase {
    address?: string;
    authentication?: string;
    discardToNoreplyAddress?: boolean;
    domain?: string;
    enableStarttlsAuto?: boolean;
    enabled?: boolean;
    noreplyAddress?: string;
    password?: string;
    port?: string;
    supportAddress?: string;
    supportAddressType?: string;
    userName?: string;
    username?: string;
}
export declare class EnterpriseSettingsEnterpriseSnmp extends SpeakeasyBase {
    community?: string;
    enabled?: boolean;
}
export declare class EnterpriseSettingsEnterpriseSyslog extends SpeakeasyBase {
    enabled?: boolean;
    protocolName?: string;
    server?: string;
}
export declare class EnterpriseSettingsEnterprise extends SpeakeasyBase {
    adminPassword?: string;
    assets?: string;
    authMode?: string;
    avatar?: EnterpriseSettingsEnterpriseAvatar;
    cas?: EnterpriseSettingsEnterpriseCas;
    collectd?: EnterpriseSettingsEnterpriseCollectd;
    configurationId?: number;
    configurationRunCount?: number;
    customer?: EnterpriseSettingsEnterpriseCustomer;
    expireSessions?: boolean;
    githubHostname?: string;
    githubOauth?: EnterpriseSettingsEnterpriseGithubOauth;
    githubSsl?: EnterpriseSettingsEnterpriseGithubSsl;
    httpProxy?: string;
    identiconsHost?: string;
    ldap?: EnterpriseSettingsEnterpriseLdap;
    license?: EnterpriseSettingsEnterpriseLicense;
    loadBalancer?: string;
    mapping?: EnterpriseSettingsEnterpriseMapping;
    ntp?: EnterpriseSettingsEnterpriseNtp;
    pages?: EnterpriseSettingsEnterprisePages;
    privateMode?: boolean;
    publicPages?: boolean;
    saml?: EnterpriseSettingsEnterpriseSaml;
    signupEnabled?: boolean;
    smtp?: EnterpriseSettingsEnterpriseSmtp;
    snmp?: EnterpriseSettingsEnterpriseSnmp;
    subdomainIsolation?: boolean;
    syslog?: EnterpriseSettingsEnterpriseSyslog;
    timezone?: string;
}
export declare class EnterpriseSettings extends SpeakeasyBase {
    enterprise?: EnterpriseSettingsEnterprise;
    runList?: string[];
}
