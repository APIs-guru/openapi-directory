import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Breadcrumb } from "./breadcrumb";
import { Item } from "./item";



export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "json, name=breadcrumbs", elemType: Breadcrumb })
  breadcrumbs?: Breadcrumb[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=cookies", elemType: Item })
  cookies?: Item[];

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: Item })
  data?: Item[];

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=form", elemType: Item })
  form?: Item[];

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString", elemType: Item })
  queryString?: Item[];

  @SpeakeasyMetadata({ data: "json, name=serverVariables", elemType: Item })
  serverVariables?: Item[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleTemplate" })
  titleTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
