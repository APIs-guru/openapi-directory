package shared




type HealthCheckTypeEnum string

const (
    HealthCheckTypeEnumHTTP HealthCheckTypeEnum = "HTTP"
HealthCheckTypeEnumHTTPS HealthCheckTypeEnum = "HTTPS"
HealthCheckTypeEnumTCP HealthCheckTypeEnum = "TCP"
)


