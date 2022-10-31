package shared

type LayerTypeEnum string

const (
	LayerTypeEnumAwsFlowRuby      LayerTypeEnum = "aws-flow-ruby"
	LayerTypeEnumEcsCluster       LayerTypeEnum = "ecs-cluster"
	LayerTypeEnumJavaApp          LayerTypeEnum = "java-app"
	LayerTypeEnumLb               LayerTypeEnum = "lb"
	LayerTypeEnumWeb              LayerTypeEnum = "web"
	LayerTypeEnumPhpApp           LayerTypeEnum = "php-app"
	LayerTypeEnumRailsApp         LayerTypeEnum = "rails-app"
	LayerTypeEnumNodejsApp        LayerTypeEnum = "nodejs-app"
	LayerTypeEnumMemcached        LayerTypeEnum = "memcached"
	LayerTypeEnumDbMaster         LayerTypeEnum = "db-master"
	LayerTypeEnumMonitoringMaster LayerTypeEnum = "monitoring-master"
	LayerTypeEnumCustom           LayerTypeEnum = "custom"
)
