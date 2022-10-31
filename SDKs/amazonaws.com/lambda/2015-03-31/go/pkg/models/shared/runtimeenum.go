package shared

type RuntimeEnum string

const (
	RuntimeEnumNodejs       RuntimeEnum = "nodejs"
	RuntimeEnumNodejs43     RuntimeEnum = "nodejs4.3"
	RuntimeEnumNodejs610    RuntimeEnum = "nodejs6.10"
	RuntimeEnumNodejs810    RuntimeEnum = "nodejs8.10"
	RuntimeEnumNodejs10X    RuntimeEnum = "nodejs10.x"
	RuntimeEnumNodejs12X    RuntimeEnum = "nodejs12.x"
	RuntimeEnumNodejs14X    RuntimeEnum = "nodejs14.x"
	RuntimeEnumJava8        RuntimeEnum = "java8"
	RuntimeEnumJava8Al2     RuntimeEnum = "java8.al2"
	RuntimeEnumJava11       RuntimeEnum = "java11"
	RuntimeEnumPython27     RuntimeEnum = "python2.7"
	RuntimeEnumPython36     RuntimeEnum = "python3.6"
	RuntimeEnumPython37     RuntimeEnum = "python3.7"
	RuntimeEnumPython38     RuntimeEnum = "python3.8"
	RuntimeEnumPython39     RuntimeEnum = "python3.9"
	RuntimeEnumDotnetcore10 RuntimeEnum = "dotnetcore1.0"
	RuntimeEnumDotnetcore20 RuntimeEnum = "dotnetcore2.0"
	RuntimeEnumDotnetcore21 RuntimeEnum = "dotnetcore2.1"
	RuntimeEnumDotnetcore31 RuntimeEnum = "dotnetcore3.1"
	RuntimeEnumNodejs43Edge RuntimeEnum = "nodejs4.3-edge"
	RuntimeEnumGo1X         RuntimeEnum = "go1.x"
	RuntimeEnumRuby25       RuntimeEnum = "ruby2.5"
	RuntimeEnumRuby27       RuntimeEnum = "ruby2.7"
	RuntimeEnumProvided     RuntimeEnum = "provided"
	RuntimeEnumProvidedAl2  RuntimeEnum = "provided.al2"
)
