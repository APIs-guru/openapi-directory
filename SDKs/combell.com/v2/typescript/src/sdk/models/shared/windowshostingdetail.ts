import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPool } from "./applicationpool";
import { WindowsIpTypeEnum } from "./windowsiptypeenum";
import { WindowsSite } from "./windowssite";



export class WindowsHostingDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @SpeakeasyMetadata({ data: "json, name=application_pool" })
  applicationPool?: ApplicationPool;

  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ftp_username" })
  ftpUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_type" })
  ipType?: WindowsIpTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=max_size" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=mssql_database_names" })
  mssqlDatabaseNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: WindowsSite })
  sites?: WindowsSite[];
}
