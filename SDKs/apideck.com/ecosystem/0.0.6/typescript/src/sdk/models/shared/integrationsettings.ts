import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IntegrationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albacross_id" })
  albacrossId?: string;

  @SpeakeasyMetadata({ data: "json, name=automate_enabled" })
  automateEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blendr_enabled" })
  blendrEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=combidesk_enabled" })
  combideskEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crisp_id" })
  crispId?: string;

  @SpeakeasyMetadata({ data: "json, name=drift_id" })
  driftId?: string;

  @SpeakeasyMetadata({ data: "json, name=google_analytics_id" })
  googleAnalyticsId?: string;

  @SpeakeasyMetadata({ data: "json, name=google_tag_manager_id" })
  googleTagManagerId?: string;

  @SpeakeasyMetadata({ data: "json, name=heap_id" })
  heapId?: string;

  @SpeakeasyMetadata({ data: "json, name=hubspot_portal_id" })
  hubspotPortalId?: string;

  @SpeakeasyMetadata({ data: "json, name=integromat_enabled" })
  integromatEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intercom_app_id" })
  intercomAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=iubenda_cookie_policy_id" })
  iubendaCookiePolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=iubenda_site_id" })
  iubendaSiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=journy_io_domain" })
  journyIoDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=journy_io_id" })
  journyIoId?: string;

  @SpeakeasyMetadata({ data: "json, name=livechat_id" })
  livechatId?: string;

  @SpeakeasyMetadata({ data: "json, name=metomic_id" })
  metomicId?: string;

  @SpeakeasyMetadata({ data: "json, name=microsoft_flow_enabled" })
  microsoftFlowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=microsoft_flow_id" })
  microsoftFlowId?: string;

  @SpeakeasyMetadata({ data: "json, name=onetrust_id" })
  onetrustId?: string;

  @SpeakeasyMetadata({ data: "json, name=piesync_enabled" })
  piesyncEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segment_enabled" })
  segmentEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segment_id" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=tray_io_enabled" })
  trayIoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zapier_beta_link" })
  zapierBetaLink?: string;

  @SpeakeasyMetadata({ data: "json, name=zapier_enabled" })
  zapierEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zapier_id" })
  zapierId?: string;
}
