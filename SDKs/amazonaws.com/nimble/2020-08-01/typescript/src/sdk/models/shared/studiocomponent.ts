import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioComponentConfiguration } from "./studiocomponentconfiguration";
import { StudioComponentInitializationScript } from "./studiocomponentinitializationscript";
import { ScriptParameterKeyValue } from "./scriptparameterkeyvalue";
import { StudioComponentStateEnum } from "./studiocomponentstateenum";
import { StudioComponentStatusCodeEnum } from "./studiocomponentstatuscodeenum";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";



// StudioComponent
/** 
 * A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
**/
export class StudioComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: StudioComponentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=initializationScripts", elemType: StudioComponentInitializationScript })
  initializationScripts?: StudioComponentInitializationScript[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptParameters", elemType: ScriptParameterKeyValue })
  scriptParameters?: ScriptParameterKeyValue[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StudioComponentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: StudioComponentStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: StudioComponentSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StudioComponentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
