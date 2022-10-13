package shared

type OperatingSystemEnum string

const (
	OperatingSystemEnumWindows               OperatingSystemEnum = "WINDOWS"
	OperatingSystemEnumAmazonLinux           OperatingSystemEnum = "AMAZON_LINUX"
	OperatingSystemEnumAmazonLinux2          OperatingSystemEnum = "AMAZON_LINUX_2"
	OperatingSystemEnumUbuntu                OperatingSystemEnum = "UBUNTU"
	OperatingSystemEnumRedhatEnterpriseLinux OperatingSystemEnum = "REDHAT_ENTERPRISE_LINUX"
	OperatingSystemEnumSuse                  OperatingSystemEnum = "SUSE"
	OperatingSystemEnumCentos                OperatingSystemEnum = "CENTOS"
	OperatingSystemEnumOracleLinux           OperatingSystemEnum = "ORACLE_LINUX"
	OperatingSystemEnumDebian                OperatingSystemEnum = "DEBIAN"
	OperatingSystemEnumMacos                 OperatingSystemEnum = "MACOS"
)
