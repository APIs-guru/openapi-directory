from dataclasses import dataclass, field
from typing import Enum

class LayerTypeEnum(str, Enum):
    AWS_FLOW_RUBY = "aws-flow-ruby"
    ECS_CLUSTER = "ecs-cluster"
    JAVA_APP = "java-app"
    LB = "lb"
    WEB = "web"
    PHP_APP = "php-app"
    RAILS_APP = "rails-app"
    NODEJS_APP = "nodejs-app"
    MEMCACHED = "memcached"
    DB_MASTER = "db-master"
    MONITORING_MASTER = "monitoring-master"
    CUSTOM = "custom"

