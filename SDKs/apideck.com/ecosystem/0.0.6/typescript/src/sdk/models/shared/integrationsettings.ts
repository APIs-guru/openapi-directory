import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IntegrationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=albacross_id" })
  albacrossId?: string;

  @Metadata({ data: "json, name=automate_enabled" })
  automateEnabled?: boolean;

  @Metadata({ data: "json, name=blendr_enabled" })
  blendrEnabled?: boolean;

  @Metadata({ data: "json, name=combidesk_enabled" })
  combideskEnabled?: boolean;

  @Metadata({ data: "json, name=crisp_id" })
  crispId?: string;

  @Metadata({ data: "json, name=drift_id" })
  driftId?: string;

  @Metadata({ data: "json, name=google_analytics_id" })
  googleAnalyticsId?: string;

  @Metadata({ data: "json, name=google_tag_manager_id" })
  googleTagManagerId?: string;

  @Metadata({ data: "json, name=heap_id" })
  heapId?: string;

  @Metadata({ data: "json, name=hubspot_portal_id" })
  hubspotPortalId?: string;

  @Metadata({ data: "json, name=integromat_enabled" })
  integromatEnabled?: boolean;

  @Metadata({ data: "json, name=intercom_app_id" })
  intercomAppId?: string;

  @Metadata({ data: "json, name=iubenda_cookie_policy_id" })
  iubendaCookiePolicyId?: string;

  @Metadata({ data: "json, name=iubenda_site_id" })
  iubendaSiteId?: string;

  @Metadata({ data: "json, name=journy_io_domain" })
  journyIoDomain?: string;

  @Metadata({ data: "json, name=journy_io_id" })
  journyIoId?: string;

  @Metadata({ data: "json, name=livechat_id" })
  livechatId?: string;

  @Metadata({ data: "json, name=metomic_id" })
  metomicId?: string;

  @Metadata({ data: "json, name=microsoft_flow_enabled" })
  microsoftFlowEnabled?: boolean;

  @Metadata({ data: "json, name=microsoft_flow_id" })
  microsoftFlowId?: string;

  @Metadata({ data: "json, name=onetrust_id" })
  onetrustId?: string;

  @Metadata({ data: "json, name=piesync_enabled" })
  piesyncEnabled?: boolean;

  @Metadata({ data: "json, name=segment_enabled" })
  segmentEnabled?: boolean;

  @Metadata({ data: "json, name=segment_id" })
  segmentId?: string;

  @Metadata({ data: "json, name=tray_io_enabled" })
  trayIoEnabled?: boolean;

  @Metadata({ data: "json, name=zapier_beta_link" })
  zapierBetaLink?: string;

  @Metadata({ data: "json, name=zapier_enabled" })
  zapierEnabled?: boolean;

  @Metadata({ data: "json, name=zapier_id" })
  zapierId?: string;
}
